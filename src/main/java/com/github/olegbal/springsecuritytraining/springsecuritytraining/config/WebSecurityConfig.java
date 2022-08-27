package com.github.olegbal.springsecuritytraining.springsecuritytraining.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
public class WebSecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(
            authorize -> authorize
                .antMatchers("/account").hasAnyRole("ADMIN", "USER")
                .antMatchers("/balance").hasAnyRole("ADMIN", "USER")
                .antMatchers("/loan").hasAnyRole("ADMIN", "USER")
                .antMatchers("/card").hasAnyRole("ADMIN", "USER")
                .antMatchers("/admin").hasRole("ADMIN")
                .antMatchers("/notices").permitAll()
                .antMatchers("/contact").permitAll()
        ).formLogin()
        .and()
        .httpBasic();
    return http.build();
  }


  @Bean
  public UserDetailsService users() {
    UserDetails user = User.builder()
        .username("user")
        .password("{noop}12345")
        .roles("USER")
        .build();
    UserDetails admin = User.builder()
        .username("admin")
        .password("{noop}12345")
        .roles("USER", "ADMIN")
        .build();
    return new InMemoryUserDetailsManager(user, admin);
  }
}
