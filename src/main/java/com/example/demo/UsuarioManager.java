package com.example.demo;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class UsuarioManager {
    private List<Usuario> usuarios;
    private final UsuarioRepository usuarioRepository;

    public UsuarioManager(UsuarioRepository usuarioRepository) {
        this.usuarios = new ArrayList<>();
        this.usuarioRepository = usuarioRepository;
    }

    public void adicionarUsuario(Usuario usuario) {
        usuarios.add(usuario); 
        usuarioRepository.save(usuario);
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll(); 
    }

    public Optional<Usuario> autenticar(String email, String senha) {
        return usuarioRepository.findByNome(email, senha);
    }
    

}