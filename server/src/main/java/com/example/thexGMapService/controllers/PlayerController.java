package com.example.thexGMapService.controllers;

import com.example.thexGMapService.models.Player;
import com.example.thexGMapService.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(value = "/players/{id}")
    public ResponseEntity getPlayer(@PathVariable Long id){
        return new ResponseEntity<>(playerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/players")
    public ResponseEntity<Player> postPlayer(@RequestBody Player player){
        playerRepository.save(player);
        return new ResponseEntity<>(player, HttpStatus.CREATED);
    }
}
