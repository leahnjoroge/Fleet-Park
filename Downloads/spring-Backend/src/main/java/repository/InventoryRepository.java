package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.ParkingSpot;
@Repository

public interface InventoryRepository extends  JpaRepository <ParkingSpot, String> {

		// TODO Auto-generated method stub
		
	

}
