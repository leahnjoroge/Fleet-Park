package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.ParkingSpot;
import entity.Trucks;
@Repository
public interface TruckInRepository extends JpaRepository<Trucks, String>{


	

	

}
