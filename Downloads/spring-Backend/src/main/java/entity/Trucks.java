package entity;

import java.awt.Color;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Trucks implements Serializable{
	@Id
int TruckNumber;
	@Column
String LicensePlate;
	@Column
String make;
	@Column
int year;
	@Column
String weigth;

	


public Trucks() {
		super();
		// TODO Auto-generated constructor stub
	}
//public Trucks(int truckNumber, String licensePlate, String make, int year, double weigth) {
//	super();
//	TruckNumber = truckNumber;
//	LicensePlate = licensePlate;
//	this.make = make;
//	this.year = year;
//	this.weigth = weigth;
//	this.LicensePlate = licensePlate;
//}
public int getTruckNumber() {
	return TruckNumber;
}
public void setTruckNumber(int truckNumber) {
	TruckNumber = truckNumber;
}
public String getLicensePlate() {
	return LicensePlate;
}
public void setLicensePlate(String licensePlate) {
	LicensePlate = licensePlate;
}
public String getMake() {
	return make;
}
public void setMake(String make) {
	this.make = make;
}
public int getYear() {
	return year;
}
public void setYear(int year) {
	this.year = year;
}
public String getWeigth() {
	return weigth;
}
public void setWeigth(String weigth) {
	this.weigth = weigth;
}
public Trucks(String inputs, Color color) {
	super();
}
public void setUser(Object object) {
	// TODO Auto-generated method stub
	
}
public String getUser() {
	// TODO Auto-generated method stub
	return null;
}
@Override
public String toString() {
	return "Trucks [TruckNumber=" + TruckNumber + ", LicensePlate=" + LicensePlate + ", make=" + make + ", year=" + year
			+ ", weigth=" + weigth + "]";
}
  

}
