package br.com.capacitacaobiblioteca.domain.Categoriadelivro;

import br.com.capacitacaobiblioteca.core.Controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categoria")
public class CategoriaController extends AbstractController<Categoria> {
}
