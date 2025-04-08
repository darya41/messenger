package com.project.messenger.backend.repository;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Repository;

import com.project.messenger.backend.model.User;
import com.project.messenger.backend.util.PasswordEncoder;

@Repository
public class AuthRepository {
  
  private final SessionFactory factory = new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
  
  public User registration(User user) {
     if (user == null || user.getLogin() == null || user.getPassword() == null) {
            throw new IllegalArgumentException("User data cannot be null");
        }
     
     String hashPassword = PasswordEncoder.encode(user.getPassword());
     user.setPassword(hashPassword);
     
     return createUser(user);
    
  }
  
  public User createUser(User user) {
    Transaction transaction = null;
        try(Session session = factory.openSession()) {
            transaction = session.beginTransaction();
            session.persist(user);
            transaction.commit();
            return user;
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw new RepositoryException("Failed to register user", e);
        }
  }
  
  public User auth(String login, String password) {
    try (Session session = factory.openSession()){
      return session.createQuery("FROM users WHERE login = :login AND password :=password",
          User.class
          ).setParameter("login",login)
          .setParameter("password", password)
          .uniqueResult();
    }catch(HibernateException e) {
       throw new RepositoryException("Ошибка авторизации", e);
    }    
  }
  
  public boolean isLoginAvailable(String login) {
    try(Session session = factory.openSession()) {
      User existingUser = session.createQuery(
                  "FROM User WHERE login = :login", User.class)
                  .setParameter("login", login)
                  .uniqueResult();
      
      if (existingUser == null)
      {
        return false;
      }
      return true;
           
    }catch(HibernateException e) {
       throw new RepositoryException("Database access error", e);
    }
  }
}