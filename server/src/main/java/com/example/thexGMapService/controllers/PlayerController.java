package com.example.thexGMapService.controllers;

import com.example.thexGMapService.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping(value="/players")
    public ResponseEntity getALlPlayersAndFilters(
            @RequestParam(required = false, name = "name") String name,
            @RequestParam(required = false, name = "team") String team,
//            @RequestParam(required = false, name = "expectedGoals") double xG,
            @RequestParam(required = false, name = "goals") Integer goals
    ){
        return new ResponseEntity(playerRepository.findAll(), HttpStatus.OK);
    }
}
