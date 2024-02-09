package com.example.guardianx.service;

import com.example.guardianx.VM.request.AuthenticationRequest;
import com.example.guardianx.VM.request.RegisterRequest;
import com.example.guardianx.VM.response.AuthenticationResponse;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);
    AuthenticationResponse authenticate(AuthenticationRequest request);
}