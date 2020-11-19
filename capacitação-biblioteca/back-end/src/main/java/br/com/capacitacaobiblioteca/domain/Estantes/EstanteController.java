package br.com.capacitacaobiblioteca.domain.Estantes;

import br.com.capacitacaobiblioteca.core.Controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/estante")
public class EstanteController extends AbstractController<Estante> {
}
