package entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Barcode {
	@Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	int Id;
	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	String barcode;

	public String getBarcode() {
		return barcode;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}
}
