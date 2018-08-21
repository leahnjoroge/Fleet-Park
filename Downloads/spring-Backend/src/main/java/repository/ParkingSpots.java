package repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.ParkingSpot;

public interface ParkingSpots extends JpaRepository<ParkingSpot, String>{

	ArrayList<ParkingSpot> findAll();

}
