package br.com.capacitacaobiblioteca.core.Service;

import org.springframework.validation.Errors;

import java.util.List;

public interface IService<C> {

    List<C> findAll();

    C findById(long id);

    C save(C object, Errors errors);

    void deleteById(long id);
}
