package com.github.olegbal.springsecuritytraining.springsecuritytraining.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

  @GetMapping("/account")
  public String sayWelcome() {
    return "Welcome blah blah security course";
  }

}
