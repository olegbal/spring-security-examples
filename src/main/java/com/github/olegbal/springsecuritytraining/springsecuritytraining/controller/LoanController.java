package com.github.olegbal.springsecuritytraining.springsecuritytraining.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {

  @GetMapping("/loan")
  public String sayWelcome() {
    return "Welcome blah blah security course";
  }

}
