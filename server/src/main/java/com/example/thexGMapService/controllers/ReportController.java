package com.example.thexGMapService.controllers;


import com.example.thexGMapService.models.Player;
import com.example.thexGMapService.models.Team;
import com.example.thexGMapService.repositories.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReportController {

    @Autowired
    ReportRepository reportRepository;

    @GetMapping(value = "/reports")
    public ResponseEntity getAllReportsAndFilters(
            @RequestParam(required = false, name = "player") Player player,
            @RequestParam(required = false, name = "team")Team team,
            @RequestParam(required = false, name = "expected_goals") double xG,
            @RequestParam(required = false, name = "goals") Integer goals
            ){
        return new ResponseEntity(reportRepository.findAll(), HttpStatus.OK);
    }

}
