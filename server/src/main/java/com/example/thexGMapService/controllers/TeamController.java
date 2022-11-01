package com.example.thexGMapService.controllers;

import com.example.thexGMapService.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {

    @Autowired
    TeamRepository teamRepository;

    @GetMapping(value = "/teams")
    public ResponseEntity getAllTeamsAndFilters(
            @RequestParam(required = false, name = "name") String teamName
    ){
        return new ResponseEntity<>(teamRepository.findAll(), HttpStatus.OK);
    }
}
