package com.example.backend.Controller;



import com.example.backend.Exception.NonExistentReservation;
import com.example.backend.Model.Reservation;
import com.example.backend.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class ReservationController {
    @Autowired
    private ReservationRepository reservationRepository ;

    @PostMapping("/addreservation")
    private void addReservation(@RequestBody Reservation reservation){
        reservation.setReservationDate(new Date());
        this.reservationRepository.save(reservation);
    }

    @GetMapping("/reservations/{id}")
    private Reservation getReservation(@PathVariable int id){
        return this.reservationRepository.findById(id).orElseThrow(()-> new NonExistentReservation(id));

    }
    @GetMapping("/reservation")
    private List<Reservation> getReservations(){
        return this.reservationRepository.findAll();
    }
    @DeleteMapping("/reservations/{id}")
    private void deleteReservation(@PathVariable int id){
        this.reservationRepository.deleteById(id);

    }


}
