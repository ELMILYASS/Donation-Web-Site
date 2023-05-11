package com.example.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Machines {
    @Id
    private int machineID ;

    private String Type ;
    private String brand ;
    private String description ;
    private int quantity ;
    private int availableItems;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name = "donation_id",referencedColumnName = "donationID")
    private Donation donation ;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "order_id",referencedColumnName = "orderID")
    private Order order ;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "reservation_id",referencedColumnName = "reservationID")
    private Reservation reservation ;

}
