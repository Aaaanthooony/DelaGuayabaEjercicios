//Anthony Rodriguez Ledezma 207720941
class Main {
  public static void main(String[] args) {
    occurrency();
  }

  public static void occurrency() {
    
    int number = 0;
    int occurrences = 0;
    int[] myArray = { 1, 2, 2, 5, 4, 6, 7, 8, 8, 8 };

    for (int i = 0; i <= myArray.length-1; i++) {
      int counter = 0;
      for (int j = 0; j <= myArray.length-1; j++) {
        if (myArray[i] == myArray[j]) {
          counter += 1;

        }

      }
      if (counter >= occurrences) {
        occurrences = counter;
        number = myArray[i];
      }

    }
    System.out.println("Ocurrencias: "+occurrences+"\nNumero: "+number);
  }
}