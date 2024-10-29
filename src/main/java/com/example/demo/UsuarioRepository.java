package com.example.demo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Optional<Usuario> findByNome(String email, String senha);
}