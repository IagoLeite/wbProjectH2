package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController // Adicionando a anotação RestController
@RequestMapping("/api")
public class UsuarioController {
    private final UsuarioManager manager;

    public UsuarioController(UsuarioManager manager) {
        this.manager = manager;
    }

    @PostMapping("/usuarios") 
    public Usuario createUsuario(@RequestBody Usuario usuario) {
        manager.adicionarUsuario(usuario);
        return usuario;
    }



}
