package com.example.backend.Controller;


import com.example.backend.Exception.NonExistentOrder;
import com.example.backend.Model.Order;
import com.example.backend.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class OrderController {
    @Autowired
    private OrderRepository orderRepository ;

    @PostMapping("/addOrder")
    private void addOrder(@RequestBody Order order){
        order.setOrderDate(new Date());
        this.orderRepository.save(order);

    }

    @GetMapping("/orders/{id}")
    private Order getOrder(@PathVariable int id){
        Order order = this.orderRepository.findById(id).orElseThrow(()-> new NonExistentOrder(id)) ;
        return order ;

    }
    @GetMapping("/orders")
    private List<Order> getOrders(){
        return this.orderRepository.findAll();
    }
    @DeleteMapping("/orders/{id}")
    private void deleteOrder(@PathVariable int id){
        this.orderRepository.deleteById(id);

    }


}
