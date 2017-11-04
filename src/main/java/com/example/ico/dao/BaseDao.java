package com.example.ico.dao;

import com.example.ico.entity.OKEXOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface BaseDao extends JpaRepository<OKEXOrder,Long> {
}
