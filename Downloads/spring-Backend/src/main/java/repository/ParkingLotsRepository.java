package repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.ParkingLots;
@Repository

public interface ParkingLotsRepository extends JpaRepository <ParkingLots, String> {



	ArrayList<ParkingLots> findAll();

}
