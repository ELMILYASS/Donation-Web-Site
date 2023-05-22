package com.example.backend.security.auth;

import com.example.backend.security.user.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Date;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins={"http://127.0.0.1:5173/","http://localhost:5173/"})
public class AuthenticationController {

  private final AuthenticationService service;

  @PreAuthorize("permitAll()")
  @PostMapping("/register")
  public ResponseEntity<AuthenticationResponse> register(
      @RequestBody User user
  ) {
    user.setCreatedAt(new Date());
    return ResponseEntity.ok(service.register(user));
  }
  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request
  ) {
    return ResponseEntity.ok(service.authenticate(request));
  }

  @PostMapping("/refresh-token")
  public void refreshToken(
      HttpServletRequest request,
      HttpServletResponse response
  ) throws IOException {
    service.refreshToken(request, response);
  }


}
