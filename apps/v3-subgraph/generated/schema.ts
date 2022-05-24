// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Dao extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdAt", Value.fromString(""));
    this.set("transactionHashSummon", Value.fromBytes(Bytes.empty()));
    this.set("lootAddress", Value.fromBytes(Bytes.empty()));
    this.set("safeAddress", Value.fromBytes(Bytes.empty()));
    this.set("lootPaused", Value.fromBoolean(false));
    this.set("sharesPaused", Value.fromBoolean(false));
    this.set("gracePeriod", Value.fromBigInt(BigInt.zero()));
    this.set("votingPeriod", Value.fromBigInt(BigInt.zero()));
    this.set("proposalOffering", Value.fromBigInt(BigInt.zero()));
    this.set("quorumPercent", Value.fromBigInt(BigInt.zero()));
    this.set("sponsorThreshold", Value.fromBigInt(BigInt.zero()));
    this.set("minRetentionPercent", Value.fromBigInt(BigInt.zero()));
    this.set("totalShares", Value.fromBigInt(BigInt.zero()));
    this.set("totalLoot", Value.fromBigInt(BigInt.zero()));
    this.set("latestSponsoredProposalId", Value.fromBigInt(BigInt.zero()));
    this.set("proposalCount", Value.fromBigInt(BigInt.zero()));
    this.set("activeMemberCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Dao entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Dao entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Dao", id.toString(), this);
    }
  }

  static load(id: string): Dao | null {
    return changetype<Dao | null>(store.get("Dao", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value!.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get transactionHashSummon(): Bytes {
    let value = this.get("transactionHashSummon");
    return value!.toBytes();
  }

  set transactionHashSummon(value: Bytes) {
    this.set("transactionHashSummon", Value.fromBytes(value));
  }

  get lootAddress(): Bytes {
    let value = this.get("lootAddress");
    return value!.toBytes();
  }

  set lootAddress(value: Bytes) {
    this.set("lootAddress", Value.fromBytes(value));
  }

  get safeAddress(): Bytes {
    let value = this.get("safeAddress");
    return value!.toBytes();
  }

  set safeAddress(value: Bytes) {
    this.set("safeAddress", Value.fromBytes(value));
  }

  get lootPaused(): boolean {
    let value = this.get("lootPaused");
    return value!.toBoolean();
  }

  set lootPaused(value: boolean) {
    this.set("lootPaused", Value.fromBoolean(value));
  }

  get sharesPaused(): boolean {
    let value = this.get("sharesPaused");
    return value!.toBoolean();
  }

  set sharesPaused(value: boolean) {
    this.set("sharesPaused", Value.fromBoolean(value));
  }

  get gracePeriod(): BigInt {
    let value = this.get("gracePeriod");
    return value!.toBigInt();
  }

  set gracePeriod(value: BigInt) {
    this.set("gracePeriod", Value.fromBigInt(value));
  }

  get votingPeriod(): BigInt {
    let value = this.get("votingPeriod");
    return value!.toBigInt();
  }

  set votingPeriod(value: BigInt) {
    this.set("votingPeriod", Value.fromBigInt(value));
  }

  get proposalOffering(): BigInt {
    let value = this.get("proposalOffering");
    return value!.toBigInt();
  }

  set proposalOffering(value: BigInt) {
    this.set("proposalOffering", Value.fromBigInt(value));
  }

  get quorumPercent(): BigInt {
    let value = this.get("quorumPercent");
    return value!.toBigInt();
  }

  set quorumPercent(value: BigInt) {
    this.set("quorumPercent", Value.fromBigInt(value));
  }

  get sponsorThreshold(): BigInt {
    let value = this.get("sponsorThreshold");
    return value!.toBigInt();
  }

  set sponsorThreshold(value: BigInt) {
    this.set("sponsorThreshold", Value.fromBigInt(value));
  }

  get minRetentionPercent(): BigInt {
    let value = this.get("minRetentionPercent");
    return value!.toBigInt();
  }

  set minRetentionPercent(value: BigInt) {
    this.set("minRetentionPercent", Value.fromBigInt(value));
  }

  get shareTokenName(): string | null {
    let value = this.get("shareTokenName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set shareTokenName(value: string | null) {
    if (!value) {
      this.unset("shareTokenName");
    } else {
      this.set("shareTokenName", Value.fromString(<string>value));
    }
  }

  get shareTokenSymbol(): string | null {
    let value = this.get("shareTokenSymbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set shareTokenSymbol(value: string | null) {
    if (!value) {
      this.unset("shareTokenSymbol");
    } else {
      this.set("shareTokenSymbol", Value.fromString(<string>value));
    }
  }

  get totalShares(): BigInt {
    let value = this.get("totalShares");
    return value!.toBigInt();
  }

  set totalShares(value: BigInt) {
    this.set("totalShares", Value.fromBigInt(value));
  }

  get totalLoot(): BigInt {
    let value = this.get("totalLoot");
    return value!.toBigInt();
  }

  set totalLoot(value: BigInt) {
    this.set("totalLoot", Value.fromBigInt(value));
  }

  get latestSponsoredProposalId(): BigInt {
    let value = this.get("latestSponsoredProposalId");
    return value!.toBigInt();
  }

  set latestSponsoredProposalId(value: BigInt) {
    this.set("latestSponsoredProposalId", Value.fromBigInt(value));
  }

  get proposalCount(): BigInt {
    let value = this.get("proposalCount");
    return value!.toBigInt();
  }

  set proposalCount(value: BigInt) {
    this.set("proposalCount", Value.fromBigInt(value));
  }

  get activeMemberCount(): BigInt {
    let value = this.get("activeMemberCount");
    return value!.toBigInt();
  }

  set activeMemberCount(value: BigInt) {
    this.set("activeMemberCount", Value.fromBigInt(value));
  }

  get proposals(): Array<string> | null {
    let value = this.get("proposals");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set proposals(value: Array<string> | null) {
    if (!value) {
      this.unset("proposals");
    } else {
      this.set("proposals", Value.fromStringArray(<Array<string>>value));
    }
  }

  get members(): Array<string> | null {
    let value = this.get("members");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set members(value: Array<string> | null) {
    if (!value) {
      this.unset("members");
    } else {
      this.set("members", Value.fromStringArray(<Array<string>>value));
    }
  }

  get rageQuits(): Array<string> | null {
    let value = this.get("rageQuits");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rageQuits(value: Array<string> | null) {
    if (!value) {
      this.unset("rageQuits");
    } else {
      this.set("rageQuits", Value.fromStringArray(<Array<string>>value));
    }
  }

  get shaman(): Array<string> | null {
    let value = this.get("shaman");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set shaman(value: Array<string> | null) {
    if (!value) {
      this.unset("shaman");
    } else {
      this.set("shaman", Value.fromStringArray(<Array<string>>value));
    }
  }

  get metaData(): string | null {
    let value = this.get("metaData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metaData(value: string | null) {
    if (!value) {
      this.unset("metaData");
    } else {
      this.set("metaData", Value.fromString(<string>value));
    }
  }

  get eventTransactions(): string | null {
    let value = this.get("eventTransactions");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set eventTransactions(value: string | null) {
    if (!value) {
      this.unset("eventTransactions");
    } else {
      this.set("eventTransactions", Value.fromString(<string>value));
    }
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdAt", Value.fromString(""));
    this.set("createdBy", Value.fromBytes(Bytes.empty()));
    this.set("dao", Value.fromString(""));
    this.set("proposalId", Value.fromBigInt(BigInt.zero()));
    this.set("prevProposalId", Value.fromBigInt(BigInt.zero()));
    this.set("proposalDataHash", Value.fromBytes(Bytes.empty()));
    this.set("votingPeriod", Value.fromBigInt(BigInt.zero()));
    this.set("votingStarts", Value.fromBigInt(BigInt.zero()));
    this.set("votingEnds", Value.fromBigInt(BigInt.zero()));
    this.set("graceEnds", Value.fromBigInt(BigInt.zero()));
    this.set("proposalData", Value.fromBytes(Bytes.empty()));
    this.set("expiration", Value.fromBigInt(BigInt.zero()));
    this.set("details", Value.fromString(""));
    this.set("selfSponsor", Value.fromBoolean(false));
    this.set("sponsored", Value.fromBoolean(false));
    this.set("sponsor", Value.fromBytes(Bytes.empty()));
    this.set("cancelled", Value.fromBoolean(false));
    this.set("processed", Value.fromBoolean(false));
    this.set("actionFailed", Value.fromBoolean(false));
    this.set("passed", Value.fromBoolean(false));
    this.set("proposalOffering", Value.fromBigInt(BigInt.zero()));
    this.set("yesVotes", Value.fromBigInt(BigInt.zero()));
    this.set("noVotes", Value.fromBigInt(BigInt.zero()));
    this.set("yesBalance", Value.fromBigInt(BigInt.zero()));
    this.set("noBalance", Value.fromBigInt(BigInt.zero()));
    this.set("maxTotalSharesAndLootAtYesVote", Value.fromBigInt(BigInt.zero()));
    this.set("proposalType", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Proposal entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Proposal entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Proposal", id.toString(), this);
    }
  }

  static load(id: string): Proposal | null {
    return changetype<Proposal | null>(store.get("Proposal", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value!.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get createdBy(): Bytes {
    let value = this.get("createdBy");
    return value!.toBytes();
  }

  set createdBy(value: Bytes) {
    this.set("createdBy", Value.fromBytes(value));
  }

  get dao(): string {
    let value = this.get("dao");
    return value!.toString();
  }

  set dao(value: string) {
    this.set("dao", Value.fromString(value));
  }

  get proposalId(): BigInt {
    let value = this.get("proposalId");
    return value!.toBigInt();
  }

  set proposalId(value: BigInt) {
    this.set("proposalId", Value.fromBigInt(value));
  }

  get prevProposalId(): BigInt {
    let value = this.get("prevProposalId");
    return value!.toBigInt();
  }

  set prevProposalId(value: BigInt) {
    this.set("prevProposalId", Value.fromBigInt(value));
  }

  get proposalDataHash(): Bytes {
    let value = this.get("proposalDataHash");
    return value!.toBytes();
  }

  set proposalDataHash(value: Bytes) {
    this.set("proposalDataHash", Value.fromBytes(value));
  }

  get votingPeriod(): BigInt {
    let value = this.get("votingPeriod");
    return value!.toBigInt();
  }

  set votingPeriod(value: BigInt) {
    this.set("votingPeriod", Value.fromBigInt(value));
  }

  get votingStarts(): BigInt {
    let value = this.get("votingStarts");
    return value!.toBigInt();
  }

  set votingStarts(value: BigInt) {
    this.set("votingStarts", Value.fromBigInt(value));
  }

  get votingEnds(): BigInt {
    let value = this.get("votingEnds");
    return value!.toBigInt();
  }

  set votingEnds(value: BigInt) {
    this.set("votingEnds", Value.fromBigInt(value));
  }

  get graceEnds(): BigInt {
    let value = this.get("graceEnds");
    return value!.toBigInt();
  }

  set graceEnds(value: BigInt) {
    this.set("graceEnds", Value.fromBigInt(value));
  }

  get proposalData(): Bytes {
    let value = this.get("proposalData");
    return value!.toBytes();
  }

  set proposalData(value: Bytes) {
    this.set("proposalData", Value.fromBytes(value));
  }

  get expiration(): BigInt {
    let value = this.get("expiration");
    return value!.toBigInt();
  }

  set expiration(value: BigInt) {
    this.set("expiration", Value.fromBigInt(value));
  }

  get details(): string {
    let value = this.get("details");
    return value!.toString();
  }

  set details(value: string) {
    this.set("details", Value.fromString(value));
  }

  get selfSponsor(): boolean {
    let value = this.get("selfSponsor");
    return value!.toBoolean();
  }

  set selfSponsor(value: boolean) {
    this.set("selfSponsor", Value.fromBoolean(value));
  }

  get sponsored(): boolean {
    let value = this.get("sponsored");
    return value!.toBoolean();
  }

  set sponsored(value: boolean) {
    this.set("sponsored", Value.fromBoolean(value));
  }

  get sponsor(): Bytes {
    let value = this.get("sponsor");
    return value!.toBytes();
  }

  set sponsor(value: Bytes) {
    this.set("sponsor", Value.fromBytes(value));
  }

  get cancelled(): boolean {
    let value = this.get("cancelled");
    return value!.toBoolean();
  }

  set cancelled(value: boolean) {
    this.set("cancelled", Value.fromBoolean(value));
  }

  get processed(): boolean {
    let value = this.get("processed");
    return value!.toBoolean();
  }

  set processed(value: boolean) {
    this.set("processed", Value.fromBoolean(value));
  }

  get actionFailed(): boolean {
    let value = this.get("actionFailed");
    return value!.toBoolean();
  }

  set actionFailed(value: boolean) {
    this.set("actionFailed", Value.fromBoolean(value));
  }

  get passed(): boolean {
    let value = this.get("passed");
    return value!.toBoolean();
  }

  set passed(value: boolean) {
    this.set("passed", Value.fromBoolean(value));
  }

  get proposalOffering(): BigInt {
    let value = this.get("proposalOffering");
    return value!.toBigInt();
  }

  set proposalOffering(value: BigInt) {
    this.set("proposalOffering", Value.fromBigInt(value));
  }

  get yesVotes(): BigInt {
    let value = this.get("yesVotes");
    return value!.toBigInt();
  }

  set yesVotes(value: BigInt) {
    this.set("yesVotes", Value.fromBigInt(value));
  }

  get noVotes(): BigInt {
    let value = this.get("noVotes");
    return value!.toBigInt();
  }

  set noVotes(value: BigInt) {
    this.set("noVotes", Value.fromBigInt(value));
  }

  get yesBalance(): BigInt {
    let value = this.get("yesBalance");
    return value!.toBigInt();
  }

  set yesBalance(value: BigInt) {
    this.set("yesBalance", Value.fromBigInt(value));
  }

  get noBalance(): BigInt {
    let value = this.get("noBalance");
    return value!.toBigInt();
  }

  set noBalance(value: BigInt) {
    this.set("noBalance", Value.fromBigInt(value));
  }

  get maxTotalSharesAndLootAtYesVote(): BigInt {
    let value = this.get("maxTotalSharesAndLootAtYesVote");
    return value!.toBigInt();
  }

  set maxTotalSharesAndLootAtYesVote(value: BigInt) {
    this.set("maxTotalSharesAndLootAtYesVote", Value.fromBigInt(value));
  }

  get tributeToken(): Bytes | null {
    let value = this.get("tributeToken");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tributeToken(value: Bytes | null) {
    if (!value) {
      this.unset("tributeToken");
    } else {
      this.set("tributeToken", Value.fromBytes(<Bytes>value));
    }
  }

  get tributeOffered(): BigInt | null {
    let value = this.get("tributeOffered");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tributeOffered(value: BigInt | null) {
    if (!value) {
      this.unset("tributeOffered");
    } else {
      this.set("tributeOffered", Value.fromBigInt(<BigInt>value));
    }
  }

  get tributeTokenSymbol(): string | null {
    let value = this.get("tributeTokenSymbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tributeTokenSymbol(value: string | null) {
    if (!value) {
      this.unset("tributeTokenSymbol");
    } else {
      this.set("tributeTokenSymbol", Value.fromString(<string>value));
    }
  }

  get tributeTokenDecimals(): BigInt | null {
    let value = this.get("tributeTokenDecimals");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tributeTokenDecimals(value: BigInt | null) {
    if (!value) {
      this.unset("tributeTokenDecimals");
    } else {
      this.set("tributeTokenDecimals", Value.fromBigInt(<BigInt>value));
    }
  }

  get tributeEscrowRecipient(): Bytes | null {
    let value = this.get("tributeEscrowRecipient");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tributeEscrowRecipient(value: Bytes | null) {
    if (!value) {
      this.unset("tributeEscrowRecipient");
    } else {
      this.set("tributeEscrowRecipient", Value.fromBytes(<Bytes>value));
    }
  }

  get proposalType(): string {
    let value = this.get("proposalType");
    return value!.toString();
  }

  set proposalType(value: string) {
    this.set("proposalType", Value.fromString(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (!value) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get contentURI(): string | null {
    let value = this.get("contentURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contentURI(value: string | null) {
    if (!value) {
      this.unset("contentURI");
    } else {
      this.set("contentURI", Value.fromString(<string>value));
    }
  }

  get contentURIType(): string | null {
    let value = this.get("contentURIType");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contentURIType(value: string | null) {
    if (!value) {
      this.unset("contentURIType");
    } else {
      this.set("contentURIType", Value.fromString(<string>value));
    }
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (!value) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdAt", Value.fromString(""));
    this.set("daoAddress", Value.fromBytes(Bytes.empty()));
    this.set("approved", Value.fromBoolean(false));
    this.set("balance", Value.fromBigInt(BigInt.zero()));
    this.set("proposal", Value.fromString(""));
    this.set("member", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Vote entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Vote entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Vote", id.toString(), this);
    }
  }

  static load(id: string): Vote | null {
    return changetype<Vote | null>(store.get("Vote", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value!.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get daoAddress(): Bytes {
    let value = this.get("daoAddress");
    return value!.toBytes();
  }

  set daoAddress(value: Bytes) {
    this.set("daoAddress", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value!.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get member(): string {
    let value = this.get("member");
    return value!.toString();
  }

  set member(value: string) {
    this.set("member", Value.fromString(value));
  }
}

export class MetaData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdAt", Value.fromString(""));
    this.set("createdBy", Value.fromBytes(Bytes.empty()));
    this.set("rawContent", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MetaData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save MetaData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("MetaData", id.toString(), this);
    }
  }

  static load(id: string): MetaData | null {
    return changetype<MetaData | null>(store.get("MetaData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value!.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get createdBy(): Bytes {
    let value = this.get("createdBy");
    return value!.toBytes();
  }

  set createdBy(value: Bytes) {
    this.set("createdBy", Value.fromBytes(value));
  }

  get dao(): string | null {
    let value = this.get("dao");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set dao(value: string | null) {
    if (!value) {
      this.unset("dao");
    } else {
      this.set("dao", Value.fromString(<string>value));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get rawContent(): string {
    let value = this.get("rawContent");
    return value!.toString();
  }

  set rawContent(value: string) {
    this.set("rawContent", Value.fromString(value));
  }
}

export class Member extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdAt", Value.fromString(""));
    this.set("dao", Value.fromString(""));
    this.set("memberAddress", Value.fromBytes(Bytes.empty()));
    this.set("shares", Value.fromBigInt(BigInt.zero()));
    this.set("loot", Value.fromBigInt(BigInt.zero()));
    this.set("delegatingTo", Value.fromBytes(Bytes.empty()));
    this.set("delegateShares", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Member entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Member entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Member", id.toString(), this);
    }
  }

  static load(id: string): Member | null {
    return changetype<Member | null>(store.get("Member", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value!.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get dao(): string {
    let value = this.get("dao");
    return value!.toString();
  }

  set dao(value: string) {
    this.set("dao", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value!.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value!.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get loot(): BigInt {
    let value = this.get("loot");
    return value!.toBigInt();
  }

  set loot(value: BigInt) {
    this.set("loot", Value.fromBigInt(value));
  }

  get delegatingTo(): Bytes {
    let value = this.get("delegatingTo");
    return value!.toBytes();
  }

  set delegatingTo(value: Bytes) {
    this.set("delegatingTo", Value.fromBytes(value));
  }

  get delegateShares(): BigInt {
    let value = this.get("delegateShares");
    return value!.toBigInt();
  }

  set delegateShares(value: BigInt) {
    this.set("delegateShares", Value.fromBigInt(value));
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (!value) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class RageQuit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdAt", Value.fromString(""));
    this.set("dao", Value.fromString(""));
    this.set("member", Value.fromString(""));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("shares", Value.fromBigInt(BigInt.zero()));
    this.set("loot", Value.fromBigInt(BigInt.zero()));
    this.set("tokens", Value.fromBytesArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RageQuit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RageQuit entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RageQuit", id.toString(), this);
    }
  }

  static load(id: string): RageQuit | null {
    return changetype<RageQuit | null>(store.get("RageQuit", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value!.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get dao(): string {
    let value = this.get("dao");
    return value!.toString();
  }

  set dao(value: string) {
    this.set("dao", Value.fromString(value));
  }

  get member(): string {
    let value = this.get("member");
    return value!.toString();
  }

  set member(value: string) {
    this.set("member", Value.fromString(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value!.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get loot(): BigInt {
    let value = this.get("loot");
    return value!.toBigInt();
  }

  set loot(value: BigInt) {
    this.set("loot", Value.fromBigInt(value));
  }

  get tokens(): Array<Bytes> {
    let value = this.get("tokens");
    return value!.toBytesArray();
  }

  set tokens(value: Array<Bytes>) {
    this.set("tokens", Value.fromBytesArray(value));
  }
}

export class Shaman extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdAt", Value.fromString(""));
    this.set("dao", Value.fromString(""));
    this.set("shamanAddress", Value.fromBytes(Bytes.empty()));
    this.set("permissions", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Shaman entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Shaman entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Shaman", id.toString(), this);
    }
  }

  static load(id: string): Shaman | null {
    return changetype<Shaman | null>(store.get("Shaman", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value!.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get dao(): string {
    let value = this.get("dao");
    return value!.toString();
  }

  set dao(value: string) {
    this.set("dao", Value.fromString(value));
  }

  get shamanAddress(): Bytes {
    let value = this.get("shamanAddress");
    return value!.toBytes();
  }

  set shamanAddress(value: Bytes) {
    this.set("shamanAddress", Value.fromBytes(value));
  }

  get permissions(): BigInt {
    let value = this.get("permissions");
    return value!.toBigInt();
  }

  set permissions(value: BigInt) {
    this.set("permissions", Value.fromBigInt(value));
  }
}

export class EventTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdAt", Value.fromString(""));
    this.set("dao", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EventTransaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save EventTransaction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("EventTransaction", id.toString(), this);
    }
  }

  static load(id: string): EventTransaction | null {
    return changetype<EventTransaction | null>(
      store.get("EventTransaction", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value!.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get dao(): string {
    let value = this.get("dao");
    return value!.toString();
  }

  set dao(value: string) {
    this.set("dao", Value.fromString(value));
  }
}
