package entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Entity
public class ParkingSpot implements Serializable{

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;
 
  private Trucks truck;
  @Column
  private int rowNo;
  @Column
  private int spotNumber;
  @Column
  private double price;
  @Column
  private int size;
  @Column
  private String vacancy;
 
 
  public ParkingSpot() {}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}
@OneToOne(mappedBy="truck", cascade=CascadeType.ALL)
public Trucks getTruck() {
	return truck;
}

public void setTruck(Trucks truck) {
	this.truck = truck;
}

public int getRowNo() {
	return rowNo;
}

public void setRowNo(int rowNo) {
	this.rowNo = rowNo;
}

public int getSpotNumber() {
	return spotNumber;
}

public void setSpotNumber(int spotNumber) {
	this.spotNumber = spotNumber;
}

public double getPrice() {
	return price;
}

public void setPrice(double price) {
	this.price = price;
}

public int getSize() {
	return size;
}

public void setSize(int size) {
	this.size = size;
}

public String getVacancy() {
	return vacancy;
}

public void setVacancy(String vacancy) {
	this.vacancy = vacancy;
}  
  
 
}
