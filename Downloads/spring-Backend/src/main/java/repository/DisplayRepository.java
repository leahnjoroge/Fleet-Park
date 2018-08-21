package repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Trucks;

public interface DisplayRepository extends JpaRepository<Trucks, String> {

	ArrayList<Trucks> findAll();



}
