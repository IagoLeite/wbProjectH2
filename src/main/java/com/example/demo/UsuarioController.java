package com.example.demo;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UsuarioController {
    private final UsuarioManager manager;

    public UsuarioController(UsuarioManager manager) {
        this.manager = manager;
    }

@PostMapping("/usuarios")
public ResponseEntity<String> createUsuario(@RequestBody Usuario usuario) {
    try {
        manager.adicionarUsuario(usuario);
        return ResponseEntity.ok("Usuário cadastrado com sucesso!");
    } catch (DataIntegrityViolationException ex) {
        // Handle specific database constraint violations
        return ResponseEntity.badRequest().body("Email já cadastrado.");
    } catch (Exception ex) {
        // Log the exception for debugging
        System.out.println(ex);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao cadastrar usuário.");
    }
}
    @GetMapping("/users")
    public List<Usuario> listar(){
        return manager.listarUsuarios();
    }
}
