export abstract class HashGenerator {
  abstract hash(plain: string): Promise<string>
}
