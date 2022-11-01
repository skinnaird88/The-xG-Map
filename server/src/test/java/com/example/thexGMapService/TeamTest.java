package com.example.thexGMapService;

import com.example.thexGMapService.models.Team;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TeamTest {
    Team team1;

    @Before
    public void before(){
        team1 = new Team("Bonnyrigg Rose");
    }

    @Test
    public void teamHasName(){
    assertEquals("Bonnyrigg Rose", team1.getName());
    }
}
