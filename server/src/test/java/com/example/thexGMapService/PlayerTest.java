package com.example.thexGMapService;

import com.example.thexGMapService.models.Player;
import com.example.thexGMapService.models.Team;
import org.junit.Before;
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PlayerTest {
    Player player1;

    Team Liverpool;

    @Before
    public void before(){
        player1 = new Player("Ben Doak", 20, Liverpool, 0.00, 0);
    }

    @Test
    public void playerHasName(){
        assertEquals("Ben Doak", player1.getName());
    }

    @Test
    public void playerHasAge(){
        assertEquals(20, player1.getAge());
    }
    @Test
    public void playerHasTeam(){
        assertEquals(Liverpool, player1.getTeam());
    }
}
