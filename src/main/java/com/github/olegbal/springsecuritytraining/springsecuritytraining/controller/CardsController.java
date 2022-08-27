package com.github.olegbal.springsecuritytraining.springsecuritytraining.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CardsController {

  @GetMapping("/card")
  public String sayWelcome() {
    return "Welcome blah blah security course";
  }

}
