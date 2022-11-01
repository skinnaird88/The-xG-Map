package com.example.thexGMapService.repositories;

import com.example.thexGMapService.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
