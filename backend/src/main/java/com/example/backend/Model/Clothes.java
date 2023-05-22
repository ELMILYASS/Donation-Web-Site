package com.example.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Clothes {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int clothesId ;
    private String Type ;
    private String size ;
    private int age ;
    private String gender ;
    private int quantity ;
    private int availableItems;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "donation_id",referencedColumnName = "donationID")
    private Donation donation ;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "order_id",referencedColumnName = "orderID")
    private Order order ;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "reservation_id",referencedColumnName = "reservationID")
    private Reservation reservation ;
}
