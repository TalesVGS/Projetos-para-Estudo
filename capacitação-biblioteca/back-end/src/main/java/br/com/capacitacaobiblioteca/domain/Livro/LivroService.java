package br.com.capacitacaobiblioteca.domain.Livro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public List<Livro> findAll() { return livroRepository.findAll(); }

    public Livro findOne(long id) {
        return livroRepository.findById(id).get();
    }

    public Livro save(Livro livro, Errors errors) {
        return livroRepository.save(livro);
    }

    public void deleteById(long id) {
        livroRepository.deleteById(id);
    }

}
