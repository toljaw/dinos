namespace backend.Classes;

public abstract class Karte
{
    // properties:
    protected string Name { get; set; }
    protected decimal Kategorie1 { get; set; }
    protected decimal Kategorie2 { get; set; }
    protected decimal Kategorie3 { get; set; }
    protected decimal Kategorie4 { get; set; }
    protected decimal Kategorie5 { get; set; }
    protected string Spiel { get; set; }

    // constructor:
    protected Karte(string name, decimal kat1, decimal kat2, decimal kat3, decimal kat4, decimal kat5, string spiel)
    {
        this.Name = name;
        this.Kategorie1 = kat1;
        this.Kategorie2 = kat2;
        this.Kategorie3 = kat3;
        this.Kategorie4 = kat4;
        this.Kategorie5 = kat5;
        this.Spiel = spiel;
    }

    // methods:
    public abstract void ShowStats();
}