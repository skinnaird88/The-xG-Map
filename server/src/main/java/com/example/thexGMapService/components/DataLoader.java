package com.example.thexGMapService.components;

import com.example.thexGMapService.models.Player;
import com.example.thexGMapService.models.Team;
import com.example.thexGMapService.repositories.PlayerRepository;
import com.example.thexGMapService.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
//@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    TeamRepository teamRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){
        Team team1 = new Team("Liverpool");
        teamRepository.save(team1);

        Player player1 = new Player("Ben Doak", 20, team1);
        playerRepository.save(player1);

        Player player2 = new Player("Harvey Elliott", 21, team1);
        playerRepository.save(player2);
    }

}
