package com.des.backend.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class Controller {
   
  @GetMapping("/mensagem")
  public Map<String, String> getMensagem() {
        return Map.of("mensagem", "Olá do back-end em Java!");
    }
}

  
}
