namespace backend.Classes;

public class Dino : Karte
{
    // properties:
    
    
    // constructor:
    public Dino(string name, decimal erstesAufkommen, decimal koerperLaenge, decimal koerperHoehe, decimal schaedelLaenge, decimal gewicht, string spiel = "dinos") 
        : base(name, erstesAufkommen, koerperLaenge, koerperHoehe, schaedelLaenge, gewicht, spiel)
    {
        
    }
    
    // methods:

    public override void ShowStats()
    {
        Console.WriteLine($"\n****************************************\n" +
                          $"Name: \t\t\t{this.Name}\n" +
                          $"1. Aufkommen: \t\tvor {this.Kategorie1} Mio. Jahren\n" +
                          $"Körperlänge: \t\t{this.Kategorie2} m\n" +
                          $"Körperhöhe: \t\t{this.Kategorie3} m\n" +
                          $"Schädellänge: \t\t{this.Kategorie4} m\n" +
                          $"Gewicht: \t\t{this.Kategorie5} kg\n" +
                          $"****************************************\n");
    }
}
