package com.example.thexGMapService.components;

import com.example.thexGMapService.models.Player;
import com.example.thexGMapService.models.Report;
import com.example.thexGMapService.models.Team;
import com.example.thexGMapService.repositories.PlayerRepository;
import com.example.thexGMapService.repositories.ReportRepository;
import com.example.thexGMapService.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    TeamRepository teamRepository;
    @Autowired
    ReportRepository reportRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){
        Team team1 = new Team("Liverpool");
        teamRepository.save(team1);

        Player player1 = new Player("Ben Doak", 20, team1);
        playerRepository.save(player1);

        Player player2 = new Player("Harvey Elliott", 21, team1);
        playerRepository.save(player2);

        Team team2 = new Team("Ajax");
        teamRepository.save(team2);

        Team team3 = new Team("Bonnyrigg Rose");
        teamRepository.save(team3);

        Team team4 = new Team("Celtic Women");
        teamRepository.save(team4);

        Team team5 = new Team("Chelsea Women");
        teamRepository.save(team5);

        Team team6 = new Team("Manchester United Women");
        teamRepository.save(team6);

        Team team7 = new Team("Crystal Palace");
        teamRepository.save(team7);

        Team team8 = new Team("Olympique de Marseille");
        teamRepository.save(team8);

        Team team9 = new Team("Eintracht Frankfurt");
        teamRepository.save(team9);

        Team team10 = new Team("Go Ahead Eagles");
        teamRepository.save(team10);

        Player player3 = new Player("David Kalokoh", 19, team2);
        playerRepository.save(player3);

        Player player4 = new Player("Ross Miller", 18, team3);
        playerRepository.save(player4);

        Player player5 = new Player("Jacynta Galabadaarachchi", 21, team4);
        playerRepository.save(player5);

        Player player6 = new Player("Sam Kerr", 29, team5);
        playerRepository.save(player6);

        Player player7 = new Player("Michael Olise", 20, team7);
        playerRepository.save(player7);

        Player player8 = new Player("Mathis Clement", 16, team8);
        playerRepository.save(player8);

        Player player9 = new Player("Mahmut Afsar", 18, team9);
        playerRepository.save(player9);

        Player player10 = new Player("Isac Lidberg", 24, team10);
        playerRepository.save(player10);

        Report report1 = new Report(2, 0.9, player1, team3);
        reportRepository.save(report1);

        Report report2 = new Report(1, 0.5, player2, team2);
        reportRepository.save(report2);

        Report report3 = new Report(2, 1.8, player5, team6);
        reportRepository.save(report3);

        Report report4 = new Report(3, 2.3, player6, team6);
        reportRepository.save(report4);

        Report report5 = new Report(0, 0.35, player9, team10);
        reportRepository.save(report5);

        Report report6 = new Report(1, 0.65, player10, team9);
        reportRepository.save(report6);
    }

}
