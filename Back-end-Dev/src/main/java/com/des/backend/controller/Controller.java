package com.des.backend.controller;


import com.exemplo.demo.model.Mensagem;
import com.exemplo.demo.service.MensagemService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Permite requisições de qualquer origem (CORS)


public class Controller {

    private final MensagemService mensagemService;

    public MensagemController(MensagemService mensagemService) {
        this.mensagemService = mensagemService;
    }

    @GetMapping("/mensagem")
    public Mensagem getMensagem() {
        return mensagemService.obterMensagem();
    }
   


}
