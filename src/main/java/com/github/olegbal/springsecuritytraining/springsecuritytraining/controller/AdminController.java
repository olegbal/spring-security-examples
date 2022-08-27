package com.github.olegbal.springsecuritytraining.springsecuritytraining.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

  @GetMapping("/admin")
  public String sayWelcome() {
    return "Welcome, Administrator!";
  }

}
