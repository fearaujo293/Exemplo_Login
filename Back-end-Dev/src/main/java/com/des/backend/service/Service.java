package com.des.backend.service;

import com.exemplo.demo.model.Mensagem;
import org.springframework.stereotype.Service;

@Service
public class Service {
  
  public Mensagem obterMensagem() {
        return new Mensagem("Olá do back-end em Java!");
    }


}

