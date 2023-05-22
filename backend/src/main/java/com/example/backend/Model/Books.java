package com.example.backend.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookId;
    private String type;
    private String title;
    private int readerAge;
    private int quantity;
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
