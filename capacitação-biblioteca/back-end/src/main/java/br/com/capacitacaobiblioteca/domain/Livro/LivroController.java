package br.com.capacitacaobiblioteca.domain.Livro;
import br.com.capacitacaobiblioteca.core.Controller.AbstractController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/livro")
public class LivroController extends AbstractController<Livro> {
}
