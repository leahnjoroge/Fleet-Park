package lab.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.coyote.Response;
import org.hibernate.service.internal.ProvidedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.pdf.Barcode128;
import com.itextpdf.text.pdf.PdfWriter;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import entity.Barcode;
import entity.Chart;
import entity.MyFiles;
import entity.MyMessage;
import entity.ParkingLots;
import entity.ParkingSpot;
import entity.Trucks;
import entity.User;
import repository.BarcodeRepository;
import repository.ChartRepository;
import repository.DisplayRepository;
import repository.InventoryRepository;
import repository.MessageRepository;
import repository.ParkingLotsRepository;
import repository.ParkingSpots;
import repository.TruckInRepository;
import repository.UserRepository;
@RestController 
@CrossOrigin
public class UserController {
	public static final String ACCOUNT_SID="xxxxxxxxxxxxxxx";
	public static final String AUTH_TOKEN="xxxxxxxxxxxx";
	public static final String TWILIO_NUMBER="xxxxxxxxxx";
	public static int fileNum=1;
	@Autowired 
    UserRepository userRepository;
	@Autowired 
	DisplayRepository displayRepository;
	@Autowired
	ParkingSpots spotsRepository;
	@Autowired 
	InventoryRepository inventoryRepository;
	@Autowired 
   TruckInRepository truckInRepository;
	@Autowired
	ParkingLotsRepository lotsRepository;
	@Autowired
	MessageRepository messageRepo;
	@Autowired 
	BarcodeRepository barcodeRepo;
	@Autowired 
	ChartRepository chartRepo;
	
	@RequestMapping(value= "/register", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public  ResponseEntity <User> registerUser(@RequestBody User user) {
 		System.out.println(user);
 		userRepository.save(user);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
		
	}
	@RequestMapping("signIn")
	public ModelAndView login() {
		return new ModelAndView("login","user", new User());
		
		}
	@RequestMapping
	(value="/sigIn",method= RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> login(@RequestBody User user){
		User myUser = userRepository.findOne(user.getEmail());
				//findByEmailandPassword(user.getEmail(), user.getPassword());
		System.out.println(myUser);
		return new ResponseEntity<>(myUser, HttpStatus.OK);
		
	}

//	@Autowired
//	public static void main (String [ ] args) throws Exception, DocumentException {
//		int barcodeId = (int) (Math.random()*10000000);
//		Document d = new Document(new Rectangle(PageSize.A4));
//		PdfWriter p= PdfWriter.getInstance(d, new FileOutputStream ("/Users/leahnjoroge/Downloads/Demo.pdf"));
//	     d.open();
//	     Barcode128 b= new Barcode128();
//	   b.setCode("" + barcodeId);
//	     d.add(b.createImageWithBarcode(p.getDirectContent(), null, null));
//	     d.close();
//	System.out.println("successfully created");
//	}
	//create barcodes
	
	}

	
	
	}
	
	@RequestMapping(value="/inventory", method=RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity <Trucks> addInventory(@RequestBody Trucks trucks){
		System.out.print(trucks);
		truckInRepository.save(trucks);
		return new ResponseEntity<>(trucks, HttpStatus.CREATED);
		
	}
	
	}
//	@RequestMapping(value="/chart", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<ArrayList<Trucks>> displayChart(){
//		ArrayList<Trucks> trucks= (ArrayList<Trucks>) displayRepository.findPrice();
//		return new ResponseEntity<>(trucks, HttpStatus.OK);
//	}
	//assgin spots
 	@RequestMapping(value="/findSpots", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
 	public ResponseEntity<ArrayList<ParkingSpot>> assignSpots(){
 		ArrayList<ParkingSpot> spots = (ArrayList<ParkingSpot>) spotsRepository.findAll();
 		return new ResponseEntity<>(spots, HttpStatus.OK);
 	}
 	@RequestMapping(value="/booking", method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
 	public ResponseEntity <HttpStatus> bookingUser(@RequestBody User user){
		return new ResponseEntity <>(HttpStatus.CREATED);
 		
 	}
 	@RequestMapping(value="/VacanyRate", method=RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
 	public ResponseEntity <ArrayList<ParkingSpot>> checkVacany (@RequestBody Trucks trucks){
 		 ArrayList<ParkingSpot> spots =(ArrayList<ParkingSpot>) spotsRepository.findAll();
 		       System.out.println(spots);
 				return new ResponseEntity <>(HttpStatus.OK);
 		
 	}
 	//add spots
 	@RequestMapping(value="/Spots", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
     public ResponseEntity <ParkingSpot> addParrkingSpots(@RequestBody ParkingSpot spot ){
 	  inventoryRepository.save(spot);
 		return new ResponseEntity <>(HttpStatus.CREATED);
 	}
 	//find parkinglots
 	@RequestMapping(value="/ParkingLots", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)	
 	public ResponseEntity<ArrayList<ParkingLots>> assignLots(){
 		ArrayList<ParkingLots> lots =(ArrayList<ParkingLots>) lotsRepository.findAll();
		return new ResponseEntity<>(lots, HttpStatus.OK);
 		
 	}
 	//save parkinglots
 	@RequestMapping(value="/getLots", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
     public ResponseEntity<ParkingLots> add(@RequestBody ParkingLots lots){
 		System.out.print(lots);
 		lotsRepository.save(lots);
 		return new ResponseEntity<>(lots,HttpStatus.CREATED);
 		
 	}
 	//find all users 
 	@RequestMapping(value="/findAllUser",produces=MediaType.APPLICATION_JSON_VALUE,method=RequestMethod.GET)
 	@ResponseBody
 	public ResponseEntity<List<User>> findAllUser(){
 		List<User> users = userRepository.findAll();
 		System.out.println(users);
 	     return new ResponseEntity<>(users,HttpStatus.OK);
 	     
 	
 	}
 	//save parkingspots
 	@RequestMapping(value="addspots", method=RequestMethod.POST)
 	public ResponseEntity<HttpStatus> parkingspots (@RequestBody ParkingSpot parkingspot ){
		
 		spotsRepository.save(parkingspot);
 		
 		
 		return new ResponseEntity<>(HttpStatus.CREATED);
 		
 	}
 	
 	//get all parkingspots
 	@RequestMapping(value="/findAllSPots", produces = MediaType.APPLICATION_JSON_VALUE, method=RequestMethod.GET)
 	public ResponseEntity<ArrayList<ParkingSpot>> findAllSpots(){
 		ArrayList<ParkingSpot> spots = (ArrayList<ParkingSpot>) spotsRepository.findAll();
 		System.out.println("Spots : "+spots.size());
 		return new ResponseEntity<>(spots,HttpStatus.OK);
 	}
 	//ADD TRUCKSdhed edhw
// 	@RequestMapping(value="/Trucks", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
// 	public ResponseEntity <Trucks> trucks (@RequestBody Trucks trucks){
// 		TruckInRepository.save(trucks);
// 		return new ResponseEntity<>(HttpStatus.CREATED);
 		
 	}
 	//get all trucks 
     @RequestMapping(value="/findAllTrucks", produces=MediaType.APPLICATION_JSON_VALUE, method=RequestMethod.GET)
       public ResponseEntity<ArrayList<Trucks>> findAllTrucks(){
    	 System.out.println("here");
    	 ArrayList<Trucks> trucks =(ArrayList<Trucks>) truckInRepository.findAll();
  		System.out.println("Trucks : "+trucks.size());
    	System.out.print(trucks);
    	int number = trucks.size();
		System.out.println(trucks);
		System.out.println("The numbe is"+number);
    	 return new ResponseEntity<>(trucks,HttpStatus.OK);
     }
     
     
//     @RequestMapping(value="/trucks",method=RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
// 	public ResponseEntity<ArrayList<Trucks>> chartRepo(){
// 		ArrayList<Trucks> trucks = (ArrayList<Trucks> ) chartRepo.findAll();
// 		int leah = trucks.size();
// 		System.out.println(leah);
// 		return new ResponseEntity<>(trucks,HttpStatus.OK);
//     }
}






