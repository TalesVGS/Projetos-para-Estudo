package br.com.capacitacaobiblioteca.domain.Livro;

import br.com.capacitacaobiblioteca.core.Controller.ResponseAbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/livro")
public class LivroController extends ResponseAbstractController {

    @Autowired
    private LivroService livroService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return jsonResponse(livroService.findAll());
    }

    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody Livro livro, Errors errors) {
        return jsonResponse(livroService.save(livro, errors));
    }

    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody Livro livro, Errors errors) {
        return jsonResponse(livroService.save(livro, errors));
    }

    @GetMapping("{id}")
    public ResponseEntity<?> findOne(@PathVariable long id) {
        return jsonResponse(livroService.findOne(id));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deletebyId(@PathVariable long id) {
        livroService.deleteById(id);
        return jsonResponse();
    }

}
