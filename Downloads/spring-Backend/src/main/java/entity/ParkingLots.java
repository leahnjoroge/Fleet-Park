package entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OrderColumn;
@Entity
public class ParkingLots {
	static int NO_PARK = -1;
	public static int length;
	//public static int length;
	@Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	int Id;
	@Column
	   String name;
	@Column
	   String street;
	   public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	@Column
	String city;
	@Column
	   String state;
	@Column
	   String zipCode;
	@OrderColumn
	   Trucks []ParkingSpot;
	   @Column
	   int price;
	   @Column
	   int size;
	   @Column
	   int Vacancy;
	  
	   
	public int getVacancy() {
		return Vacancy;
	}	
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public void printTrucks() { 
		
	}
	public double getVacancyRate() {
		return Vacancy;
	//public double getVacancyRate() {
		//return Vacancy*1.0/size;
	}
	   public void getTruckNumber() {
		   
	   }
	public int parkTrucks(Trucks trucks) {
		// TODO Auto-generated method stub
		return 0;
	}
	public Object getTrucks() {
		// TODO Auto-generated method stub
		return null;
	}
	public void setTrucks(Trucks trucks) {
		// TODO Auto-generated method stub
		
	}
	public String getSpotNumber() {
		// TODO Auto-generated method stub
		return null;
	}
}
