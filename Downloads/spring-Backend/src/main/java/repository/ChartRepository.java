package repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Chart;
import entity.Trucks;

public interface ChartRepository extends JpaRepository<Chart,String> {


}
