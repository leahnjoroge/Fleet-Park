package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Barcode;

public interface BarcodeRepository extends JpaRepository <Barcode,String>{

}
